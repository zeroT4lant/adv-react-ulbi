
import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  // //userReducer достали из стора
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)//вытаскиваем из редюсера все стейты
  // const {} = userSlice.actions//вытащили действия
  // const dispatch = useAppDispatch()//при помощи него используем функции, диспетчер
  
  // React.useEffect(()=> {
  //   dispatch(fetchUsers())
  // },[ ])
  
  return (
    <div className="App">
      {/* {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
    </div>
  );
}

export default App;
