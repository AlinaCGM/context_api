import create from "zustand"
import { useFetchCustom } from "./useFetchCustom"


export const[useStore1]= create(set=>({
fetched:()=> set(state=>({useFetchCustom}))
}))