import { Avatar ,Divider } from 'antd';
import {GithubOutlined,LinkedinOutlined} from "@ant-design/icons"


const Author = () => {
    return ( 
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://media-exp1.licdn.com/dms/image/C4D03AQEWfB9AxxGFGA/profile-displayphoto-shrink_400_400/0/1614599321512?e=1665014400&v=beta&t=tcHfrIp_iUb3O0bX9EF39UQ-gWf6ErgD1hM50OaK3CA" />
            </div>
            <div className="author-introduction">
            I dreamed 127.0.0.1!!!!!!
            <Divider></Divider>
                <a href="https://github.com/LONGLIN163">
                  <Avatar size="28" icon={<GithubOutlined />} className="account" />
                </a>
                <a href="https://www.linkedin.com/in/devlonglin/">
                  <Avatar size="28" icon={<LinkedinOutlined />} className="account" />
                </a>
            
            </div>

        </div>
     );
}
 
export default Author;