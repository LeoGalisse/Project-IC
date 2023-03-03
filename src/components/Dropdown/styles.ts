import styled from 'styled-components'

export const BodyContainer = styled.div`
  #container #menu-wrap {
    position: relative;
    height: 25px;
    width: 25px;
    margin-right: 10px;
  }

  #container #menu-wrap .dots {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #container #menu-wrap .dots > div,
  #container #menu-wrap .dots > div:after,
  #container #menu-wrap .dots > div:before {
    height: 4px;
    width: 4px;
    background-color: ${(props) => props.theme.slate[600]};
    border-radius: 50%;
    transition: 0.5s;
  }

  #container #menu-wrap .dots > div {
    position: relative;
  }

  #container #menu-wrap .dots > div:after {
    content: '';
    position: absolute;
    bottom: calc((25px / 2) - (6px / 2));
    left: 0;
  }

  #container #menu-wrap .dots > div:before {
    content: '';
    position: absolute;
    top: calc((25px / 2) - (6px / 2));
    left: 0;
  }

  #container #menu-wrap .menu {
    position: absolute;
    right: -10px;
    top: calc(-12px + 50px);
    width: 0;
    height: 0;
    background-color: ${(props) => props.theme.slate[50]};
    padding: 20px 15px;
    box-shadow: 2px 4px 6px ${(props) => props.theme.slate[300]};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    opacity: 0;
  }

  #container #menu-wrap .menu ul {
    list-style: none;
  }

  #container #menu-wrap .menu ul li {
    margin: 15px 0;
  }

  #container #menu-wrap .menu ul li .link {
    text-decoration: none;
    color: rgba(49, 49, 49, 0.85);
    opacity: 0;
  }

  #container #menu-wrap .toggler {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    appearance: none;
    cursor: pointer;
  }

  #container #menu-wrap .toggler:hover + .dots > div,
  #container #menu-wrap .toggler:hover + .dots > div:after,
  #container #menu-wrap .toggler:hover + .dots > div:before {
    background-color: rgba(49, 49, 49, 0.6);
  }

  #container #menu-wrap .toggler:checked + .dots > div {
    -webkit-transform: translateX(
        calc(((25px / 2) - (6px / 2)) * -0.7071067812)
      )
      translateY(calc(((25px / 2) - (6px / 2)) * -0.7071067812));
    -ms-transform: translateX(calc(((25px / 2) - (6px / 2)) * -0.7071067812))
      translateY(calc(((25px / 2) - (6px / 2)) * -0.7071067812));
    transform: translateX(calc(((25px / 2) - (6px / 2)) * -0.7071067812))
      translateY(calc(((25px / 2) - (6px / 2)) * -0.7071067812));
  }

  #container #menu-wrap .toggler:checked + .dots > div:after {
    -webkit-transform: translateX(calc(((25px / 2) - (6px / 2)) * 0.7071067812))
      translateY(calc((2 * (25px / 2) - (6px / 2)) * 0.7071067812));
    -ms-transform: translateX(calc(((25px / 2) - (6px / 2)) * 0.7071067812))
      translateY(calc((2 * (25px / 2) - (6px / 2)) * 0.7071067812));
    transform: translateX(calc(((25px / 2) - (6px / 2)) * 0.7071067812))
      translateY(calc((2 * (25px / 2) - (6px / 2)) * 0.7071067812));
  }

  #container #menu-wrap .toggler:checked + .dots > div:before {
    -webkit-transform: translateX(
        calc(2 * (((25px / 2) - (6px / 2)) * 0.7071067812))
      )
      translateY(
        calc(
          ((25px / 2) - (6px / 2)) - (((25px / 2) - (6px / 2)) * 0.7071067812)
        )
      );
    -ms-transform: translateX(
        calc(2 * (((25px / 2) - (6px / 2)) * 0.7071067812))
      )
      translateY(
        calc(
          ((25px / 2) - (6px / 2)) - (((25px / 2) - (6px / 2)) * 0.7071067812)
        )
      );
    transform: translateX(calc(2 * (((25px / 2) - (6px / 2)) * 0.7071067812)))
      translateY(
        calc(
          ((25px / 2) - (6px / 2)) - (((25px / 2) - (6px / 2)) * 0.7071067812)
        )
      );
  }

  #container #menu-wrap .toggler:checked:hover + .dots > div,
  #container #menu-wrap .toggler:checked:hover + .dots > div:after,
  #container #menu-wrap .toggler:checked:hover + .dots > div:before {
    background-color: rgba(49, 49, 49, 0.6);
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  #container #menu-wrap .toggler:checked ~ .menu {
    opacity: 1;
    width: 150px;
    height: 130px;
    transition: 0.5s;
    z-index: 100;
  }

  #container #menu-wrap .toggler:checked ~ .menu ul .link {
    opacity: 1;
    transition: 0.5s ease 0.3s;
  }

  #container #menu-wrap .toggler:checked ~ .menu ul .link:hover {
    color: ${(props) => props.theme.blue[500]};
    transition: 0.2s;
  }

  #container #menu-wrap .toggler:not(:checked) ~ .menu {
    transition: 0.5s;
  }

  #container #menu-wrap .toggler:not(:checked) ~ .menu ul .link {
    transition: 0.1s;
  }

  @media (max-width: 600px) {
    #container {
      position: absolute;
      top: 50px;
      width: calc(100% - 40px);
      margin: 0;
    }
  }
`
