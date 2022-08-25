import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { setFilteredWord } from "../../redux/notesSlice";

export function Header() {
    const [searchForm, setSearchForm] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setFilteredWord(searchForm));
    }, [searchForm, dispatch])

    function handleChange(e) {
        setSearchForm(e.target.value);
    }

    return (
        <div className="header">
            <h1>NotesApp</h1>
            <input
                type="search"
                placeholder="Search..."
                value={searchForm}
                onChange={handleChange}
            />
        </div>
    )
}