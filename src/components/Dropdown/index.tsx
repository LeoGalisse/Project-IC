import { BodyContainer } from "./styles";

export function Dropdown() {
  return (
    <BodyContainer>
      <div id="container">
        <div id="menu-wrap">
          <input type="checkbox" className="toggler" />
          <div className="dots">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <ul>
                <li><a href="#" className="link">Option one</a></li>
                <li><a href="#" className="link">Option two</a></li>
                <li><a href="#" className="link">Option three</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BodyContainer>
  )
}