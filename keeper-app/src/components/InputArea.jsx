import React from "react";

function InputArea(props) {
    //State lưu note khởi tạo
    const [note, setNote] = React.useState({ title: "", content: "" });
    //Hàm gán note mới khi mình vừa nhập
    function handleChange(event) {
        const { name, value } = event.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }
    //Ngan web reload lai trang
    function preventRefresh(event) {
        //Khi click sẽ add note vừa nhập vào và vừa ngăn refresh
        props.onChecked(note);
        //initial lại cho note mới sau này
        setNote({ title: "", content: "" });
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={note.title} required={true} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" maxLength="1000" value={note.content} />
                {/*<button onClick={() => {
                    props.onChecked(note);
                    setNote({ title: "", content: "" });
                }}>
                */}
                <button type="submit" onClick={preventRefresh}>
                    ADD
                </button>
            </form>
        </div>
    );
}

export default InputArea;