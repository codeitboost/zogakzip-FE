import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GroupContext } from '../groupcreate/GroupContext';
import * as G from './GroupInfo.style';
import Like from '../common/like/Like';

export default function GroupInfo() {
  const { id } = useParams();
  const { groups } = useContext(GroupContext);

  const selectedGroup = groups.find((group) => group.id === id);

  return (
    <div>
      <G.Container>
        <G.Image src={selectedGroup.img} alt="groupImage" />
        <G.Info>
          <G.Top>
            <G.TopLeft>
              <div>D+{selectedGroup.day}</div>|<div>{selectedGroup.isPublic ? '공개' : '비공개'}</div>
            </G.TopLeft>
            <G.TopRight>
              <div>그룹 정보 수정하기</div>
              <div>그룹 삭제하기</div>
            </G.TopRight>
          </G.Top>
          <G.Middle>
            <G.Title>{selectedGroup.title}</G.Title>
            <G.Memory>
              <div>추억</div>
              <div>8</div>
            </G.Memory>
            |
            <G.Like>
              <div>그룹 공감</div>
              <div>{selectedGroup.like}</div>
            </G.Like>
          </G.Middle>
          <G.Content>{selectedGroup.content}</G.Content>
          <G.Bottom>
            <Like />
          </G.Bottom>
        </G.Info>
      </G.Container>
      <G.Line />
    </div>
  );
}
