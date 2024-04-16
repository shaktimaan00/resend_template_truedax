# Project Name

A project utilizing the Resend email service to handle contact form submissions and newsletter subscriptions.

## Description

This project provides two API endpoints for handling contact form submissions and newsletter subscriptions using the Resend email service. The first endpoint `/api/send` is used for contact form submissions, while the second endpoint `/api/subscribe` is used for newsletter subscriptions.

## Features

- Contact form submission handling
- Newsletter subscription handling
- Integration with Resend email service
- API endpoints for sending emails and subscribing to newsletters
- Simple and lightweight setup

## Installation

1. Clone the repository:

```
git clone [https://github.com/your-username/project-name.git](https://github.com/shaktimaan00/resend_template_truedax.git)
```

2. Install dependencies:

```
cd my-app
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
RESEND_API_KEY=your-resend-api-key
```

Replace `your-resend-api-key` with your actual Resend API key.

4. Start the server

`npm run dev`

## Usage

1. Access the API endpoints:

- Contact form submission: `POST /api/send`
- Newsletter subscription: `POST /api/subscribe`

Make sure to send the required parameters in the request body for each endpoint.

## Example

### Contact Form Submission

```bash
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ni**a pvt ltd"
    "message": "This is a test message."
  }'
```

### Newsletter Subscription

```bash
curl POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com"
  }'
```

## License

This project is licensed under the [MIT License](LICENSE).
