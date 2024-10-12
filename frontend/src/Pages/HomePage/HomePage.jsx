import React from 'react';
import '../../assets/styles/styles.css';
import Features from '../../Components/Features/Features';
import Hero from '../../Components/Hero/Hero';
import icon1 from '../../assets/img/icon-chat.png';
import icon2 from '../../assets/img/icon-money.png';
import icon3 from '../../assets/img/icon-security.png';

const HomePage = () => {
    const featuresData = [
        {
            id: 1,
            icon: icon1,
            title: "You are our #1 priority",
            texte: " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."

        },
        {
            id: 2,
            icon: icon2,
            title: "More savings means higher rates",
            texte: " The more you save with us, the higher your interest rate will be!",

        },
        {
            id: 3,
            icon: icon3,
            title: "Security you can trust",
            texte: "We use top of the line encryption to make sure your data and money is always safe."

        }
    ];
    return (

        <div>
            <Hero />
            <div className="features">
                {featuresData.map((feature) => (
                    <Features
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        texte={feature.texte}
                    />
                ))}

            </div>
        </div>
    );
};

export default HomePage