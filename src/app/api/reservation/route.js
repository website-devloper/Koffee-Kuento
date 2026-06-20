import { NextResponse } from 'next/server';
import { SITE } from '@/config/site';

// Simple in-memory rate limit: max 5 submissions per IP per 10 minutes
const rateLimitMap = new Map();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkRateLimit(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip) || { count: 0, start: now };
    if (now - entry.start > WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, start: now });
        return true;
    }
    if (entry.count >= RATE_LIMIT) return false;
    entry.count++;
    rateLimitMap.set(ip, entry);
    return true;
}

export async function POST(request) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
        return NextResponse.json({ error: 'Trop de tentatives. Veuillez réessayer dans 10 minutes.' }, { status: 429 });
    }

    let body;
    try {
        body = await request.json();
    } catch {
        // fallback for form submissions
        const text = await request.text();
        const params = new URLSearchParams(text);
        body = Object.fromEntries(params.entries());
    }

    const { honeypot, date, time, guests, name, phone, message } = body;

    // Spam protection
    if (honeypot) {
        return NextResponse.json({ success: true }); // silently ignore bots
    }

    // Validation
    if (!date || !time || !name) {
        return NextResponse.json({ error: 'Champs obligatoires manquants (date, heure, nom).' }, { status: 400 });
    }

    // Build WhatsApp fallback deep-link (works even without email configured)
    const whatsappNumber = SITE.contact.whatsapp || SITE.contact.phoneIntl.replace('+', '');
    const whatsappMsg = encodeURIComponent(
        `🍽️ Nouvelle réservation Koffee Kuento\n` +
        `Nom : ${name}\n` +
        `Date : ${date} à ${time}\n` +
        `Convives : ${guests || 'Non précisé'}\n` +
        `Téléphone : ${phone || 'Non fourni'}\n` +
        `Message : ${message || '–'}`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

    // TODO: when RESEND_API_KEY is set in .env.local, send email here.
    // Example:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'reservations@koffeekuento.ma',
    //   to: SITE.contact.email,
    //   subject: `Nouvelle réservation – ${name} – ${date}`,
    //   text: `...`
    // });

    return NextResponse.json({
        success: true,
        message: 'Réservation reçue ! Nous vous confirmerons sous peu.',
        whatsappFallback: whatsappLink,
    });
}
