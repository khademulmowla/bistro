import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white my-10 pt-8'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 px-36 pt-12'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2024</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, ducimus tenetur placeat culpa numquam quasi illum mollitia! Ipsam quis perferendis blanditiis fugiat odio, iusto minima voluptate optio nulla dolore reiciendis et nesciunt maiores dicta possimus. Distinctio perspiciatis veritatis amet voluptate.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>

        </div >
    );
};

export default Featured;