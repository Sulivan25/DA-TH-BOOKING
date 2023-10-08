import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import "./register.css";
import { API_HOST } from "../../config/globalconfig";

function Register() {
  // Khởi tạo các state cho các trường thông tin đăng ký
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  // Xử lý sự kiện khi người dùng thay đổi giá trị trong các trường
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Xử lý sự kiện khi người dùng nhấn nút Đăng ký
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra các giá trị và thực hiện xử lý đăng ký ở đây
    if (formData.password !== formData.confirmPassword) {
      alert("The confirmation password is incorrect");
    } else {
      // Gửi dữ liệu đăng ký lên máy chủ hoặc thực hiện các thao tác cần thiết
      //   alert("Registration successful");
      // Reset các trường sau khi đăng ký thành công (hoặc xử lý thất bại)
      try {
        const res = await axios.post(API_HOST + "/auth/register", formData);
        alert("Registration successful");
        navigate("/login");
      } catch (err) {}
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="confirm password"
          id="confirmPassword"
          onChange={handleChange}
          className="rInput"
        />
        <button onClick={handleSubmit} className="rButton">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
