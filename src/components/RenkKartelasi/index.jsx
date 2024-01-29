import React from 'react'
import styled from 'styled-components';

// STYLES
const ScrollTopWrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    overflow-x: hidden;
    z-index: 11111;

    button {
        border: none;
        width: 40px;
        height: 40px;
        background-color: #f0541b;
        color: #fff;
        border-radius: 50%;
        transition: all 0.3s;

        @media (max-width: 400px) {
            width: 30px;
            height: 30px;
        }
    }

    .icon {
        margin-top: -3px;
        font-weight: 300;

        @media (max-width: 400px) {
            font-size: 12px;
        }
    }
    .visible {
        opacity: 1;
        display: block;
        color: #fff;
        transition: opacity 0.3s;
    }
    .invisible {
        opacity: 0;
    }
`;
function RenkKartelasi() {
  return (
    <div className='ScrollTopWrapper'>RenkKartelasi</div>
  )
}

export default RenkKartelasi