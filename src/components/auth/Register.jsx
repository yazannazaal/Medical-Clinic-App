import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-6xl p-8 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#223a66]">
          Patient Registration
        </h1>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              id="firstName"
              name="firstName"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter first name"
            />
            {errors?.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              id="lastName"
              name="lastName"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter last name"
            />
            {errors?.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="dateOfBirth"
            >
              Date of Birth
            </label>
            <input
              {...register("dateOfBirth", {
                required: "Date of birth is required",
              })}
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors?.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              id="gender"
              name="gender"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors?.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
            <input
              {...register("contactNumber", {
                required: "Contact number is required",
              })}
              type="text"
              id="contactNumber"
              name="contactNumber"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter contact number"
            />
            {errors?.contactNumber && (
              <p className="text-red-500">{errors.contactNumber.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter email"
            />
            {errors?.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              id="address"
              name="address"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter address"
            />
            {errors?.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="emergencyContact"
            >
              Emergency Contact
            </label>
            <input
              {...register("emergencyContact", {
                required: "Emergency contact is required",
              })}
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter emergency contact number"
            />
            {errors?.emergencyContact && (
              <p className="text-red-500">{errors.emergencyContact.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="insuranceProvider"
            >
              Insurance Provider
            </label>
            <input
              {...register("insuranceProvider", {
                required: "Insurance provider is required",
              })}
              type="text"
              id="insuranceProvider"
              name="insuranceProvider"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter insurance provider"
            />
            {errors?.insuranceProvider && (
              <p className="text-red-500">{errors.insuranceProvider.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="insurancePolicyNumber"
            >
              Insurance Policy Number
            </label>
            <input
              {...register("insurancePolicyNumber", {
                required: "Insurance policy number is required",
              })}
              type="text"
              id="insurancePolicyNumber"
              name="insurancePolicyNumber"
              className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter policy number"
            />
            {errors?.insurancePolicyNumber && (
              <p className="text-red-500">
                {errors.insurancePolicyNumber.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2 flex items-center">
            <input
              {...register("agreePolicy", {
                required: "You must agree to the policies",
              })}
              type="checkbox"
              id="agreePolicy"
              name="agreePolicy"
              className="mr-2 h-5 w-5 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="agreePolicy" className="text-lg text-gray-700">
              I agree to the clinic policies and terms.
            </label>
            {errors?.agreePolicy && (
              <p className="text-red-500">{errors.agreePolicy.message}</p>
            )}
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="w-1/4 px-4 py-2 text-lg font-semibold text-white bg-[#223a66] hover:bg-[#dc3545] rounded-lg shadow-md focus:ring-2 transition duration-300 ease-in-out focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
