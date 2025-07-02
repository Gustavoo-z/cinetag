import styled from "styled-components";

const SectionIframe = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px 240px 120px 240px;
  iframe {
    height: 80vh;
  }
`;

export default function Iframe({ link }) {
  return (
    <SectionIframe>
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </SectionIframe>
  );
}
