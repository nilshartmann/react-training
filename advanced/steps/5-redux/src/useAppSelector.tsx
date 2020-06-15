import { AppState } from "reducers";
import { useSelector } from "react-redux";

export default function useAppSelector<R>(fn: (state: AppState) => R): R {
  return useSelector(fn);
}
