// GroupInfo.jsx
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GroupContext } from '../groupcreate/GroupContext';
import * as G from './GroupInfo.style';
import Like from '../common/like/Like';

export default function GroupInfo() {
  const { id } = useParams();
  const { groups } = useContext(GroupContext);

  // selectedGroup을 상태로 관리
  const [selectedGroup, setSelectedGroup] = useState(null);

  // 그룹 찾기 및 초기화
  useEffect(() => {
    const foundGroup = groups.find((group) => group.id === id);
    setSelectedGroup(foundGroup);
  }, [groups, id]);

  // selectedGroup이 없을 경우 처리
  if (!selectedGroup) {
    return <div>그룹을 찾을 수 없습니다.</div>;
  }

  // 그룹의 상태를 업데이트하기 위한 함수
  const handleLike = () => {
    setSelectedGroup((prevGroup) => ({
      ...prevGroup,
      like: prevGroup.like + 1, // 공감 수 1 증가
    }));
  };

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
              <G.Edit>그룹 정보 수정하기</G.Edit>
              <G.Delete>그룹 삭제하기</G.Delete>
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
            <Like onLike={handleLike} /> {/* 공감 증가 함수 전달 */}
          </G.Bottom>
        </G.Info>
      </G.Container>
      <G.Line />
    </div>
  );
}
