import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import { AppDispatch } from './store/store';


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;