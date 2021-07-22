import { Avatar ,Divider } from 'antd';
import {GithubOutlined,LinkedinOutlined,InstagramOutlined} from "@ant-design/icons"


const Author = () => {
    return ( 
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://media-exp1.licdn.com/dms/image/C4D03AQEWfB9AxxGFGA/profile-displayphoto-shrink_400_400/0/1614599321512?e=1631145600&v=beta&t=EZ90iSmbU9sBmHrZjWZQQ6OP1TZ0cIeRrwuMq2XKEFw" />
            </div>
            <div className="author-introduction">
                Share technology and share happiness!!! 
                <Divider></Divider>
                <Avatar size="28" icon={<GithubOutlined />} className="account" src="https://github.com/LONGLIN163"/>
                <Avatar size="28" icon={<LinkedinOutlined />} className="account" src="https://www.linkedin.com/in/developerlin123/"/>
                {/* <Avatar size="28" icon={<InstagramOutlined />} className="account"/> */}
            </div>

        </div>
     );
}
 
export default Author;