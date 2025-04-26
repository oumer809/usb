import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase'; // Import the Firestore instance
import { collection, addDoc } from "firebase/firestore";

function Survey() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Add a new document in collection "surveys"
      const docRef = await addDoc(collection(db, "surveys"), data);
      console.log("Document written with ID: ", docRef.id);
      navigate('/thank-you');
    } catch (error) {
      console.error("Error adding document: ", error);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Blood Donation Questionnaire</h2>
      <p className="mb-4">Please answer the following questions:</p>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-8">
          <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">1. What is your age?</label>
          <input
            type="number"
            id="age"
            {...register('age', { required: 'Age is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.age && <p className="text-red-500 text-xs italic">{errors.age.message}</p>}
        </div>

        <div className="mb-8">
          <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2"> 2. What is your gender?</label>
          <select
            id="gender"
            {...register('gender', { required: 'Gender is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
          {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender.message}</p>}
        </div>
        <div className="mb-8">
          <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2"> 3. Which department are you studying currently at MU-CHS?</label>
          <select
            id="gender"
            {...register('gender', { required: 'Gender is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select...</option>
            <option value="male">Medicine</option>
            <option value="female">M.laboratory</option>
            <option value="female">Ansthesia</option>
            <option value="female">Radiology</option>
            <option value="female">Physiotherapy</option>
            <option value="female">Environmental health</option>
            <option value="female">Nursing</option>
            <option value="female">Midwifery</option>
            <option value="female">Public Health</option>
            <option value="female">Other</option>
            
          </select>
          {errors.gender && <p className="text-red-500 text-xs italic">{errors.gender.message}</p>}
        </div>
        <div className="mb-8">
              <label htmlFor="aware" className="block text-gray-700 text-sm font-bold mb-2">
               4. How would you rate your knowledge about voluntary blood donation?
              </label>
              <select
                id="aware"
                {...register('voluntary', { required: 'Voluntary is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="very high">Very High</option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
                <option value="very low">Very Low</option>
              </select>
              {errors.aware && <p className="text-red-500 text-xs italic">{errors.aware.message}</p>}
            </div>

            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                5. Have you ever donated blood before?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                6. If yes, how many times have you donated blood in the past year?
              </label>
              <select
                id="donate"
                {...register('donateFreq', { required: 'DonationFreq is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="once">Once</option>
                <option value="twice">Twice</option>
                <option value="three times">Three times</option>
                <option value="no">No, I didn't</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                7. What motivates you to donate blood?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Altruism/helping others">Altruism/helping others</option>
                <option value="Awareness campaigns">Awareness campaigns</option>
                <option value="Family/friends influence">Family/friends influence</option>
                <option value="Personal health benefits">Personal health benefits</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                8. What concerns do you have regarding blood donation? 
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Fear of needles">Fear of needles</option>
                <option value="Health risks">Health risks</option>
                <option value="Time commitment">Time commitment</option>
                <option value="Lack of information">Lack of information</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                9. How often do you receive information about blood donation from university activities or campaigns? 
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Frequently">Frequently</option>
                <option value="Occasionally">Occasionally</option>
                <option value="Rarely">Rarely</option>
                <option value="Never">Never</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                10. Do you believe that voluntary blood donation is important for community health?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Strongly Agree">Strongly Agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly Disagree">Strongly Disagree</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                11. Do you believe that donating blood can save lives?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value=" Strongly agree"> Strongly agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value=" Disagree"> Disagree</option>                
                <option value=" Strongly disagree"> Strongly disagree</option>                
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                12. In your opinion, what is the most effective way to encourage students to donate blood?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value=" Educational workshops"> Educational workshops</option>
                <option value="Incentives/rewards">Incentives/rewards</option>
                <option value="Peer influence">Peer influence</option>
                <option value=" Social media campaigns"> Social media campaigns</option>                
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                13. How likely are you to recommend blood donation to your peers?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Very Likely">Very Likely</option>
                <option value="Likely">Likely</option>
                <option value="Neutral">Neutral</option>
                <option value="Unlikely">Unlikely</option>
                <option value="Very Unlikely">Very Unlikely</option>
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                14. What sources do you primarily rely on for information about blood donation?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Social media">Social media</option>
                <option value="University announcements">University announcements</option>
                <option value="Healthcare professionals">Healthcare professionals</option>
                <option value="Friends and family">Friends and family</option>               
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="donate" className="block text-gray-700 text-sm font-bold mb-2">
                15. Would you be interested in participating in a voluntary blood donation campaign organized in the university?
              </label>
              <select
                id="donate"
                {...register('donate', { required: 'Donation history is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>          
              </select>
              {errors.donate && <p className="text-red-500 text-xs italic">{errors.donate.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="willing" className="block text-gray-700 text-sm font-bold mb-2">
                16. Are you willing to donate blood in the future?
              </label>
              <select
                id="willing"
                {...register('willing', { required: 'Willingness is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe</option>
              </select>
              {errors.willing && <p className="text-red-500 text-xs italic">{errors.willing.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      );
    }

    export default Survey;