import React, { useEffect, useState } from 'react';
import thumbsUp from "../../assets/icons/thumbsup.svg";
import { Link, useSearchParams } from 'react-router-dom';
import Button from '../Button';
import img from "../../assets/images/image-from-rawpixel-id-12701460-png 1.png"
import rightArrow from "../../assets/icons/right arrow.svg";
import leftArrow from "../../assets/icons/left arrow.svg";

const OurProducts = () => {
  const productData = [
    {
      title: "Bio Stimulae",
      products: [
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
      ],
    },
    {
      title: "Pesticides",
      products: [
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
      ],
    },
    {
      title: "Cattle Feed",
      products: [
        {
          heading: "Herbal Pro Cattle Suppliment",
          description:
            "Herbal cattle feed supplement compositions to enhance productivity of milk quality in lactating dairy cattle",
            subHeading : "Benefits",
            subLists : [
              "Helps to increase milk production in cattle",
              "Improves milk let-down",
              "Promotes good liver health and reduces the risk of ulcers",
              "Enhances the animal's immunity"
            ]
        },
      ],
    },
  ];

  const [item, setItem] = useState(0);
    const [searchParam, setSearchParam] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(
      productData
        .map((product) => product.title)
        .includes(searchParam.get("tab") || "")
        ? searchParam.get("tab")
        : productData[0].title
    );
  
    useEffect(() => {
      setSearchParam({ tab: activeTab });
      setProducts(
        productData.find((product) => product.title === activeTab)?.products || []
      );
    }, [activeTab]);
    return (
        <div className='wrapper mt-[125px]'>
            <div className='flex flex-col gap-6 justify-center items-center'>
            <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="p-[6px] rounded-lg w-10 h-10 flex justify-center items-center bg-bgBox/25">
              <img src={thumbsUp} alt="" />
            </div>
            <p className="font-Inter text-heading text-lg font-400">
            Our Products
            </p>
          </div>

          <h1 className="font-Inter text-center leading-[45px] text-[32px] text-heading capitalize">
          See what we make and serve
          </h1>

          <p className="font-Inter text-center font-400 text-base text-bodyText">
          "Discover our wide range of agricultural products and services crafted to enhance your farming experience. From fertilizers to farming solutions, explore how we can help you achieve success in your fields."
          </p>


          <div className='flex items-center gap-2 md:gap-3'>
          {productData.map((product, i) => (
          <Button
            key={i}
            className="px-4 md:py-3 min-w-fit"
            onClick={() => {
              setActiveTab(product.title);
            }}
            variant={activeTab === product.title ? "primary" : "secondary"}
          >
            {product.title}
          </Button>
        ))}
          </div>


          <div className='flex flex-col lg:flex-row items-center justify-between w-full lg:w-[1066px] mt-[106px] px-0 lg:px-10 xl:px-0'>
          <div onClick={() => setItem(item === 0 ? item : item - 1)} className='w-[50px] h-[50px] rounded-full bg-primary hidden lg:flex justify-center items-center cursor-pointer'>
                <img src={leftArrow} alt="" />
            </div>

            <div className='transition-transform duration-500 pl-5'>
            <div className='flex h-auto rounded-xl shadow-2xl w-full min-w-[380px] max-w-[380px] md:min-w-[848px] md:max-w-[848px] overflow-x-hidden bg-white'>
                

               {
                products.map(product => 
                  <div key={product.id} style={{ transform: `translateX(-${item * 100}%)` }} className='transition-all duration-500 flex flex-col lg:flex-row items-center justify-between gap-[34px] min-w-[380px] md:min-w-[848px] p-5'>

                  <div className='w-full lg:w-[300px] flex justify-between items-center pb-3 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[#E9E9E9]'>
                    <div onClick={() => setItem(item === 0 ? item : item - 1)} className='w-[50px] h-[50px] rounded-full bg-primary flex justify-center items-center cursor-pointer'>
                <img src={leftArrow} alt="" />
            </div>

            <img src={img} alt="" />


            <div onClick={() => setItem(item === (products.length - 1) ? item : item + 1)}  className='w-[50px] h-[50px] rounded-full bg-primary flex justify-center items-center cursor-pointer'>
                <img src={rightArrow} alt="" />
            </div>
                   </div>
                   
   
   
                   <div>
                   <h1 className="font-Inter font-600 text-[24px] text-heading capitalize">{product?.heading}</h1>
   
   <p className="font-Inter font-400 text-base text-bodyText">
   {product?.description}
   </p>
   
   <h1 className="font-Inter font-600 text-[24px] text-heading capitalize">{product?.subHeading}</h1>

   {
    product?.subLists.map((list, index) => 
    <li key={index} className="font-Inter font-400 text-base text-bodyText list-disc">
    {list}
    </li>
  )
   }
                   </div>
                  </div>
                )
               }
            </div>


            
        </div>


            <div onClick={() => setItem(item === (products.length - 1) ? item : item + 1)}  className='w-[50px] h-[50px] rounded-full bg-primary hidden lg:flex justify-center items-center cursor-pointer'>
                <img src={rightArrow} alt="" />
            </div>
          </div>



          <Link to="/products" className='px-6 py-4 rounded border border-primary bg-white text-lg font-Inter font-500 text-primary mt-[76px]'>View All</Link>
            </div>
        </div>
    );
};

export default OurProducts;