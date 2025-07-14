import React, { useContext } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios"
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {

  const {user, backendUrl, loadCreditsData, token, setShowLogin} = useContext(AppContext)

  const navigate = useNavigate()

  const initpay = async(order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Credits Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response)=>{
        try {
          const {data} = await axios.post(backendUrl + '/api/user/verify-razor', response, {headers: {token}})
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    } 
    const rzp = new window.Razorpay(options)
    rzp.open() 
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
      }

      const{data} = await axios.post(backendUrl + '/api/user/pay-razor', {planId}, {headers: {token}})

      if (data.success) {
        initpay(data.order)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  return (
    <motion.div
     className="min-h-[80vh] text-center pt-14 mb-10"
     initial={{opacity:0.2, y:100}}
     transition={{duration:1}}
     whileInView={{opacity:1, y:0}}
     viewport={{once:true}}
     >
      <button className="text-lg mb-6 border rounded-full py-2 px-10 border-gray-400">
        Our Subscription
      </button>
      <h2 className="font-bold text-3xl text-center mb-6 sm:mb-10">
        Choose the Subscription
      </h2>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-pink-50 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <h2 className="mt-3 mb-1 font-semibold">{plan.id}</h2>
            <p className="text-sm">{plan.desc}</p>
            <h2 className="mt-6">
              <span className="text-3xl font-medium">₹{plan.price}</span> / {" "}
              {plan.credits} credits
            </h2>
            <button 
            onClick={() => paymentRazorpay(plan.id)}
            className="w-full bg-blue-600 text-white rounded-full mt-8 text-sm py-2.5 min-w-52">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;