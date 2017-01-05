import React from 'react';
import {Button, Row, Col, Card, Icon} from 'antd';

const FriendsList = (props) => {
  // console.log("FriendsList props", props);
  console.log("FriendsList", JSON.stringify(props.friends.list));
  
  return <div>
    <h1 id="GitMax好友列表">
      <span>GitMax好友列表</span>
      <a href="#GitMax好友列表" className="anchor">#</a>
      <span className="refresh-btn">
        <Button type="primary" icon="reload" onClick={() => props.onFetchFriends()}>
          刷新
        </Button>
      </span>
    </h1>
    <p>GitMax为你添加的所有好友：</p>
    
    <div className="friend-list-container">
      <Row gutter={16} className="new-friends-container">
        {
          props.friends.list.map(friend => {
            let detail = [];
            if (friend.friendLocation) detail.push(<div>
              <span className="details">
                <Icon type="environment-o"/>
                {`位置：${friend.friendLocation}`}
              </span>
            </div>);
            else if (friend.friendCompany) detail.push(<div>
              <span className="details">
                <Icon type="team"/>
                {`组织：${friend.friendCompany}`}
              </span>
            </div>);
            detail.push(<div>
              <span className="details">
                <Icon type="clock-circle-o"/>
                {`加入GitHub：${friend.friendCreated_at.split("T")[0]}`}
              </span>
            </div>);
            
            return <Col xs={24} sm={24} md={12} lg={8} className="friend-col">
              <Card bodyStyle={{padding: 0}} className="friend-list-card">
                <Col span={8}>
                  <div className="new-friend-image">
                    <a href={"https://github.com/" + friend.friendLogin} target="_blank">
                      <img alt={friend.friendLogin} width="100%" src={friend.friendAvatarUrl}/>
                    </a>
                  </div>
                </Col>
                <Col span={14} offset={1}>
                  <div className="friend-name">
                    <a href={"https://github.com/" + friend.friendLogin} target="_blank">
                      {friend.friendName ? friend.friendName : friend.friendLogin}
                    </a>
                  </div>
                  <div>
                    {detail}
                  </div>
                </Col>
              
              </Card>
            </Col>
          })
        }
      </Row>
    </div>
  </div>
};

export default FriendsList;
