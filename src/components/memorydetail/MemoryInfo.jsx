import * as M from './MemoryInfo.style';

export default function MemoryInfo() {
  return (
    <M.Container>
      <M.Top>
        <M.Info>
          <M.Writer>달봉이아들</M.Writer>
          <div>|</div>
          <M.Public>공개</M.Public>
        </M.Info>
        <M.Menu>
          <M.Edit>추억 수정하기</M.Edit>
          <M.Delete>추억 삭제하기</M.Delete>
        </M.Menu>
      </M.Top>
    </M.Container>
  );
}
