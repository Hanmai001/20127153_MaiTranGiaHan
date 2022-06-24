import React from "react";
import Heading from "./Heading";
import Footer from "./Footer"
import Note from "./Note";
import InputArea from "./InputArea";

function App() {
    //Khởi tạo mảng lưu trữ các note của mình add
    const [item_arr, setArrItem] = React.useState([{ title: "sfs", content: "sdfsf" }])
    //Hàm xử lý khi mình bấm vào nút ADD
    function addItem(item) {
        setArrItem((prevItem) => {
            //Sdung spread operator
            return [...prevItem, item]
        })
        //console.log(item_arr);
    }
    return (
        <div>
            <Heading />
            <InputArea onChecked={addItem} />
            {/*Đi qua từng ptu item_arr*/}
            {item_arr.map((item, index) => (
                <Note key={index} id={index} title={item.title} content={item.content} />))}
            <Footer />
        </div>
    );
};

export default App;