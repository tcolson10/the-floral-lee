import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonialsData = [
	{
		text: "The Floral Lee made my dream bouquet for my wedding! The flowers were beautifully put together and made on time so I never had to worry about anything. I loved them, I still look at the pics at least once a week they just were so gorgeous. They were the perfect final touch!",
		name: "Ryan",
	},
	{
		text: "The Floral Lee is an absolute dream to work with!! They were able to understand and execute my wedding floral vision perfectly. They are SO knowledgeable and made the planning so much fun, instead of stressful. I strongly recommend them to everyone I know.",
		name: "Rex",
	},
	{
		text: "The Floral Lee was incredible! I feel like the vision I had was kind of scattered, but they executed it perfectly and exceeded any expectations I had. I still get so many compliments on the florals from my wedding!",
		name: "Dan",
	},
	{
		text: "10/10. Booked The Floral Lee after seeing their work on Instagram and they did not disappoint. My arch was the most beautiful thing I have ever seen in my life and I am not exaggerating.",
		name: "Tami",
	},
	{
		text: "Getting married is stressful. The Floral Lee was one of the few parts of the process that was genuinely fun. They were excited about our vision, communicated clearly, and showed up and made it all real.",
		name: "Shelby",
	},
	{
		text: "I told them I wanted simple and romantic and they nailed it completely. My bouquet was exactly what I had been picturing and I couldn't stop staring at it all night!!",
		name: "Trevor",
	},
	{
		text: "I could not recommend them more!! Everything was so beautiful and they were so easy to work with the whole time. Fast responses, gorgeous results, just an amazing experience overall.",
		name: "Shayla",
	},
	{
		text: "I absolutely loved having The Floral Lee do my flowers! Everything was perfectly on time and she made the whole process so simple and organized. It was just one less thing I had to worry about on my wedding day and I was so obsessed with how everything turned out.",
		name: "Jens",
	},
	{
		text: "I was so nervous going into it because I had no idea what I wanted and flowers are so expensive. But they made me feel completely at ease from the first conversation and somehow took my scattered Pinterest board and made it into something so beautiful I actually started crying when I saw my bouquet.",
		name: "Brock",
	},
	{
		text: "We hired The Floral Lee for our daughter's wedding and they were absolutely wonderful. So easy to work with and so responsive the whole time. The ceremony arch stopped people in their tracks and we had multiple guests asking for their info before the night was even over!!",
		name: "Jack",
	},
	{
		text: "I honestly had no idea how much the florals would change the whole feel of a wedding until I saw ours. The venue looked like an absolute dream and we are still talking about how perfect everything was. So happy we went with them!!",
		name: "Landon",
	},
	{
		text: "I wanted something really different — dried and fresh mixed together with earthy tones, nothing traditional at all. I was honestly nervous no one would get it but they understood immediately. The final result was even better than my inspo pics.",
		name: "Ozzy",
	},
];

function TestimonialsFull() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="testimonials-container full-page">
            <div className="page-nav">
                <Link to="/testimonials" className="back-link" style={{ color: 'rgba(255,255,255,0.85)' }}>← Back to Testimonials</Link>
            </div>
            <div className="testimonials-header">
                <h1 className='page-title'>Testimonials</h1>
                <p>Kind words from clients turned friends</p>
            </div>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <blockquote>"{testimonial.text}"</blockquote>
                        <p className="client-name">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialsFull;
