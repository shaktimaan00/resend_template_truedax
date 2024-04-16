import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
    const { email } = await request.json();

    const {data, error} = await resend.emails.send({
        from: 'Onboarding Dev <onboarding@resend.dev>',
        to: ['anumishra0901@gmail.com'],
        subject: 'Subscribed to Newsletter',
        html: `Thank you <strong>${email}</strong> for subscribing the newsletter`,
    });

    if(error){
        return Response.json(error);
    }
    console.log("sent");
    return Response.json({ message: "Email sent Successfully", data });

}