import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItems } from "../../redux/notesSlice";


export function Footer() {

    const notes = useSelector(state => state.notes.items);
    const filteredWord = useSelector(state => state.notes.filteredWord);

    const dispatch = useDispatch()

    const filteredItems = notes.filter(item =>
        item.text
            .toLowerCase()
            .indexOf(filteredWord.toLowerCase()) !== -1);

    return (
        <div className="footer">
            <div className="notes">

                {
                    filteredItems.map(item => (
                        <div className="note-container" style={{ backgroundColor: item.color }} key={item.id}>
                            <div className="note" >{item.text}</div >
                            <button className="cross" onClick={() => dispatch(clearItems(item.id))}>❌</button>
                        </div>)
                    )
                }
            </div>
        </div>
    )
}