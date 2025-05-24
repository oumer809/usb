import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Questionnaire() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, 'questionnaireResponses'), data);
      console.log('Document written with ID: ', docRef.id);
      navigate('/thank-you');
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Laboratory Performance Questionnaire</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">

        {/* Demographic Information */}
        <div className="mb-6">
          <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">1. What is your role in the laboratory?</label>
          <select
            id="role"
            {...register('role', { required: 'Role is required' })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select...</option>
            <option value="medical_technologist">Medical Technologist</option>
            <option value="laboratory_technician">Laboratory Technician</option>
            <option value="laboratory_manager">Laboratory Manager</option>
            <option value="other">Other (please specify)</option>
          </select>
          {errors.role && <p className="text-red-500 text-xs italic">{errors.role.message}</p>}
          {/* Add an additional input if 'Other' is selected (conditional rendering) */}
        </div>

        <div className="mb-6">
          <label htmlFor="experience" className="block text-gray-700 text-sm font-bold mb-2">2. How many years of experience do you have in the laboratory setting?</label>
          <select
            id="experience"
            {...register('experience', { required: 'Experience is required' })}                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select...</option>
              <option value="less_than_1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="4-6">4-6 years</option>
              <option value="more_than_6">More than 6 years</option>
            </select>
            {errors.experience && <p className="text-red-500 text-xs italic">{errors.experience.message}</p>}
          </div>

          {/* Laboratory Performance */}
          <div className="mb-6">
            <label htmlFor="turnaround_time" className="block text-gray-700 text-sm font-bold mb-2">3. On average, what is the typical turnaround time for routine tests in your department?</label>
            <select
              id="turnaround_time"
              {...register('turnaround_time', { required: 'Turnaround time is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select...</option>
              <option value="less_than_1_hour">Less than 1 hour</option>
              <option value="1-2_hours">1-2 hours</option>
              <option value="2-4_hours">2-4 hours</option>
              <option value="more_than_4_hours">More than 4 hours</option>
            </select>
            {errors.turnaround_time && <p className="text-red-500 text-xs italic">{errors.turnaround_time.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="meet_turnaround_time" className="block text-gray-700 text-sm font-bold mb-2">4. How often do you meet the established turnaround time for routine tests?</label>
            <select
              id="meet_turnaround_time"
              {...register('meet_turnaround_time', { required: 'Meeting turnaround time is required' })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="always">Always</option>
                <option value="often">Often</option>
                <option value="sometimes">Sometimes</option>
                <option value="rarely">Rarely</option>
              </select>
              {errors.meet_turnaround_time && <p className="text-red-500 text-xs italic">{errors.meet_turnaround_time.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="test_completion_percentage" className="block text-gray-700 text-sm font-bold mb-2">5. What percentage of tests are completed within the target turnaround time?</label>
              <select
                id="test_completion_percentage"
                {...register('test_completion_percentage', { required: 'Test completion percentage is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="0-25">0-25%</option>
                <option value="26-50">26-50%</option>
                <option value="51-75">51-75%</option>
                <option value="76-100">76-100%</option>
              </select>
              {errors.test_completion_percentage && <p className="text-red-500 text-xs italic">{errors.test_completion_percentage.message}</p>}
            </div>

            {/* Factors Affecting Turnaround Time */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">6. Which of the following factors most significantly affects turnaround time in your laboratory? (Select all that apply)</label>
              <div className="flex flex-col">
                <label className="inline-flex items-center mt-3">
                  <input type="checkbox" value="staffing_levels" {...register('factors', {})} className="form-checkbox h-5 w-5 text-blue-600"/>
                  <span className="ml-2 text-gray-700">Staffing levels</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input type="checkbox" value="equipment_availability" {...register('factors', {})} className="form-checkbox h-5 w-5 text-blue-600"/>
                  <span className="ml-2 text-gray-700">Equipment availability</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input type="checkbox" value="sample_quality" {...register('factors', {})} className="form-checkbox h-5 w-5 text-blue-600"/>
                  <span className="ml-2 text-gray-700">Sample quality</span>
                </label>
                <label className="inline-flex items-center mt-3">
                  <input type="checkbox" value="workflow_processes" {...register('factors', {})} className="form-checkbox h-5 w-5 text-blue-600"/>
                  <span className="ml-2 text-gray-700">Workflow processes</span>
                </label>
                 <label className="inline-flex items-center mt-3">
                  <input type="checkbox" value="other_factor" {...register('factors', {})} className="form-checkbox h-5 w-5 text-blue-600"/>
                  <span className="ml-2 text-gray-700">Other factor</span>
                </label>
                {/* You might want to add a conditional text input for "Other" */}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="equipment_downtime_impact" className="block text-gray-700 text-sm font-bold mb-2">7. How would you rate the impact of equipment downtime on turnaround time?</label>
              <select
                id="equipment_downtime_impact"
                {...register('equipment_downtime_impact', { required: 'Equipment downtime impact is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="very_high">Very high impact</option>
                <option value="high">High impact</option>
                <option value="moderate">Moderate impact</option>
                <option value="low">Low impact</option>
              </select>
              {errors.equipment_downtime_impact && <p className="text-red-500 text-xs italic">{errors.equipment_downtime_impact.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="delays_due_to_sample_quality" className="block text-gray-700 text-sm font-bold mb-2">8. How often do you experience delays due to sample quality issues?</label>
              <select
                id="delays_due_to_sample_quality"
                {...register('delays_due_to_sample_quality', { required: 'Delays due to sample quality is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="frequently">Frequently</option>
                <option value="occasionally">Occasionally</option>
                <option value="rarely">Rarely</option>
                <option value="never">Never</option>
              </select>
              {errors.delays_due_to_sample_quality && <p className="text-red-500 text-xs italic">{errors.delays_due_to_sample_quality.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="primary_cause_of_delays" className="block text-gray-700 text-sm font-bold mb-2">9. What is the primary cause of delays in test processing in your department?</label>
              <select
                id="primary_cause_of_delays"
                {...register('primary_cause_of_delays', { required: 'Primary cause of delays is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="high_workload">High workload</option>
                <option value="technical_issues">Technical issues with equipment</option>
                <option value="delays_in_sample_collection">Delays in sample collection</option>
                <option value="other">Other (please specify)</option>
              </select>
              {errors.primary_cause_of_delays && <p className="text-red-500 text-xs italic">{errors.primary_cause_of_delays.message}</p>}
              {/* Add an additional input if 'Other' is selected (conditional rendering) */}
            </div>

            {/* Workflow and Processes */}
            <div className="mb-6">
              <label htmlFor="standardized_protocols" className="block text-gray-700 text-sm font-bold mb-2">10. Are there standardized protocols in place for processing tests?</label>
              <select
                id="standardized_protocols"
                {...register('standardized_protocols', { required: 'Standardized protocols is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="consistently_followed">Yes, consistently followed</option>
                <option value="not_consistently_followed">Yes, but not consistently followed</option>
                <option value="no">No</option>
              </select>
              {errors.standardized_protocols && <p className="text-red-500 text-xs italic">{errors.standardized_protocols.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="processes_reviewed" className="block text-gray-700 text-sm font-bold mb-2">11. How often are laboratory processes reviewed and updated?</label>
              <select
                id="processes_reviewed"
                {...register('processes_reviewed', { required: 'Processes reviewed is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
                <option value="rarely">Rarely</option>
              </select>
              {errors.processes_reviewed && <p className="text-red-500 text-xs italic ">{errors.processes_reviewed.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="lis_used" className="block text-gray-700 text-sm font-bold mb-2">12. Do you use any laboratory information systems (LIS) to manage workflow?</label>
              <select
                id="lis_used"
                {...register('lis_used', { required: 'LIS used is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="effectively">Yes, effectively</option>
                <option value="with_limitations">Yes, but with limitations</option>
                <option value="no">No</option>
              </select>
              {errors.lis_used && <p className="text-red-500 text-xs italic">{errors.lis_used.message}</p>}
            </div>

            {/* Training and Staff Competence */}
            <div className="mb-6">
              <label htmlFor="training_rating" className="block text-gray-700 text-sm font-bold mb-2">13. How would you rate the training provided to staff on new equipment and processes?</label>
              <select
                id="training_rating"
                {...register('training_rating', { required: 'Training rating is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
              {errors.training_rating && <p className="text-red-500 text-xs italic">{errors.training_rating.message}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="adequately_trained" className="block text-gray-700 text-sm font-bold mb-2">14. Do you feel adequately trained to perform your job effectively?</label>
              <select
                id="adequately_trained"
                {...register('adequately_trained', { required: 'Adequately trained is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>
                <option value="completely">Yes, completely</option>
                <option value="mostly_yes">Mostly yes</option>
                <option value="somewhat">Somewhat</option>
                <option value="no">No</option>
              </select>
              {errors.adequately_trained && <p className="text-red-500 text-xs italic">{errors.adequately_trained.message}</p>}
            </div>

            {/* Communication and Collaboration */}
            <div className="mb-6">
              <label htmlFor="communication_effectiveness" className="block text-gray-700 text-sm font-bold mb-2">15. How effective is communication between departments (e.g., nursing, physicians, lab staff)?</label>
              <select
                id="communication_effectiveness"
                {...register('communication_effectiveness', { required: 'Communication effectiveness is required' })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select...</option>