import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/notesSlice";
import { nanoid } from "@reduxjs/toolkit";


export function Content() {
    const [note, setNote] = useState({ text: "", color: "pink" });

    const dispatch = useDispatch();

    const handleText = (e) => {
        setNote(prev => ({ ...prev, text: e.target.value }));
    }

    const handleColor = (e) => {
        setNote(prev => ({ ...prev, color: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (note.text === "") {
            alert("you have to write something to add");
        } else {
            dispatch(addItem({ ...note, id: nanoid() }));
            setNote(prev => ({ ...prev, text: "" }));
        }
    }
    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter your note here..."
                    value={note.text}
                    onChange={handleText}
                />
                <div className="content-footer">
                    <div className="colors"  >
                        <input
                            type="radio"
                            name="color"
                            value="pink"
                            id="pink"
                            onChange={handleColor}
                            checked={note.color === "pink"}
                        />
                        <input
                            type="radio"
                            name="color"
                            value="darkorchid"
                            id="purple"
                            onChange={handleColor}
                            checked={note.color === "darkorchid"}
                        />
                        <input
                            type="radio"
                            name="color"
                            value="yellow"
                            id="yellow"
                            onChange={handleColor}
                            checked={note.color === "yellow"}
                        />
                        <input
                            type="radio"
                            name="color"
                            value="cyan"
                            id="blue"
                            onChange={handleColor}
                            checked={note.color === "cyan"}
                        />
                        <input
                            type="radio"
                            name="color"
                            value="greenyellow"
                            id="green"
                            onChange={handleColor}
                            checked={note.color === "greenyellow"}
                        />
                    </div>
                    <div>
                        <button>ADD</button>
                    </div>
                </div>
            </form>

        </div>
    )
}