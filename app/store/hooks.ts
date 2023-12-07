import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useDataDispatch: DispatchFunction = useDispatch;
export const useDataSelector: TypedUseSelectorHook<RootState> = useSelector;
