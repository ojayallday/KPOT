import { useForm } from 'react-hook-form';
const MyForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      // Handle form submission
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Input with validation */}
        <input {...register('username', { required: 'Username is required' })} />
        {errors.username && <p>{errors.username.message}</p>}
  
        {/* Input with validation */}
        <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />
        {errors.email && <p>{errors.email.message}</p>}
  
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    );
  };
  