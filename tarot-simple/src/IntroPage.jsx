import { Link } from "react-router-dom";

export default function IntroPage() {
  return (
    <>
      <h1>타로 카드 홈페이지에 어서오세요!</h1>
      <ul>
        <li>
          이 사이트는 타로카드를 자유롭게 뽑아서 자신의 미래를 알 수 있는 아주
          신기한 사이트입니다.
        </li>
        <li>
          <ul>
            <li>
              이 사이트에서 사용된 모든 정보는 아래의 도서를 참고하였습니다.
            </li>
            <li>
              <a href="https://www.yes24.com/Product/Goods/326349">
                https://www.yes24.com/Product/Goods/326349
              </a>
            </li>
          </ul>
        </li>
        <li>
          그럼 시작해볼까요?
          <br />
          <Link to="/selectTheme">
            시작해보기!
          </Link> 
        </li>
      </ul>
    </>
  );
}
