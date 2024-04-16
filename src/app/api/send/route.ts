import { Resend } from 'resend';
import {GithubAccessTokenEmail} from "../../../emails/email-template"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
    const { username, email, company, message } = await request.json();

    const {data, error} = await resend.emails.send({
        from: 'Onboarding Dev <onboarding@resend.dev>',
        to: ['anumishra0901@gmail.com'],
        subject: 'Confirm Password',
        react: GithubAccessTokenEmail({username:username, email:email, company:company, message:message}),
    });

    if(error){
        return Response.json(error);
    }
    console.log("sent");
    return Response.json({ message: "Email sent Successfully", data });

}