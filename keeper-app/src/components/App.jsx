import React from "react";
import Heading from "./Heading";
import Footer from "./Footer"
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
    //Khởi tạo mảng lưu trữ các note của mình add
    const [item_arr, setArrItem] = React.useState([])
    //Hàm xử lý khi mình bấm vào nút ADD
    function addNote(item) {
        setArrItem((prevItem) => {
            //Sdung spread operator
            return [...prevItem, item]
        })
        //console.log(item_arr);
    }
    //Hàm xử lý khi bấm vào nút DELETE
    function deleteNote(id) {
        setArrItem((preValue) => {
            return preValue.filter((note, index) => {
                return id != index;
            });
        });
    }
    const [checkModify, setCheck] = React.useState(false);
    function modifyNote() {
        setCheck(true);
    }
    return (
        <div>
            <Heading />
            <InputArea onChecked={addNote} />
            {/*Đi qua từng ptu item_arr*/}
            {item_arr.map((item, index) => (
                <Note key={index} id={index} title={item.title} content={item.content} onDeleted={deleteNote} onModified={modifyNote} check={checkModify} />))}
            <Footer />
        </div>
    );
};

export default App;