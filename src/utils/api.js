import {userToken} from "./token";


export const login = async(user, password) => {
  console.log('POST /login', user, password);

  const errors = [];

  if(!user){
    errors.push({
      message: 'User required',
      type: 'user'
    });
  }
  if(!password){
    errors.push({
      message: 'Password required',
      type: 'password'
    });
  }
  if(user !== 'sunrise' && password !== 'sunrise'){
    errors.push({
      message: 'Check username and password and try again',
      type: 'password'
    });
  }

  if(errors.length){
    return {errors};
  }

  return {
    token: userToken
  }
};

export const register = async(user, password) => {
  console.log('POST /register', user, password);

  const errors = [];

  if(!user){
    errors.push({
      message: 'User required',
      type: 'user'
    });
  }
  if(!password){
    errors.push({
      message: 'Password required',
      type: 'password'
    });
  }

  if(!user.endsWith('.com')){
    errors.push({
      message: 'User must end with ".com"',
      type: 'user'
    });
  }

  if(password.length < 8){
    errors.push({
      message: 'Password must be at least 8 chars',
      type: 'password'
    });
  }

  // const regex = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #=+\(\)\^?&])[A-Za-z\d$@$!%* #=+\(\)\^?&]{8,}$";
  // if(!password.match(regex)){
  //   errors.push({
  //     message: 'Password must be at least 8 chars and contain a number and letter',
  //     type: 'password'
  //   });
  // }

  if(errors.length){
    return {errors};
  }

  return {
    token: userToken
  }
};

export const fetchTasks = async(token) => {
  console.log('GET /tasks', token);

  const errors = [];

  if(!token){
    errors.push({
      message: 'Missing token',
      type: 'unauthorized'
    });
  } else {
    if (token !== userToken) {
      errors.push({
        message: 'Unauthorized',
        type: 'unauthorized'
      });
    }
  }

  if(errors.length){
    return {errors};
  }

  return {
    tasks: [
      {
        title: 'Grocery Shopping',
        description: "or I could just order a pizza",
        priority: 3
      },
      {
        title: 'Call Mom Back',
        description: "She's called me 10 times already",
        priority: 2
      },
      {
        title: 'Sign up for Yoga',
        description: "",
        priority: 4
      },
      {
        title: 'Laundry',
        description: "I've run out of underwear to turn inside out",
        priority: 1
      }
    ]
  }
};
