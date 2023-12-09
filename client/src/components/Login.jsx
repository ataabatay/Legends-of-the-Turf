import { Form } from "react-router-dom";

export default function Login(){
  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Login</h1>
      <Form className='form' method="POST">
        <input type="text" name="username" placeholder='Username' />
        <input type="password" name="password" placeholder="Password" />
        <button className='btn btn-blue' type="submit">Login</button>
        {/* {res && <p className='danger'>{res.data.message}</p>} */}
      </Form>
    </>
  )
}

    