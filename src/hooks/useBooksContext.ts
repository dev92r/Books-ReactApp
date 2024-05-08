import { useContext } from "react";
import BooksContext from "../context/BooksContext";

export function useBooksContext() {
    return useContext(BooksContext)
} 