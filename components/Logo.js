// TODO refine measurements
const width = 512;
const height = 512;
const centerX = width / 2;
const centerY = height / 2;
const playEdgeLength = width / 5;
const playCircleRadius = width / 4;
const legSegmentLength = width / 5;
const playPurple = 'hsl(270, 99%, 64%)';
const legGreen = '#26deb0';
const playStrokeWidth = 15;
const playCircleStrokeWidth = 15;
const legStrokeWidth = 20;
const legMargin = 10;

const getPointOnCircle = ({ centerX, centerY, radius, degrees }) => {
  const radians = degrees * (Math.PI / 180);

  return {
    x: radius * Math.cos(radians) + centerX,
    y: radius * Math.sin(radians) + centerY,
  };
};

const getLeg = ({ d }) => {
  return (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeWidth: legStrokeWidth,
        stroke: legGreen,
        fill: 'transparent',
      }}
      d={d}
    />
  );
};

const getLegs = ({ centerX, centerY, circleRadius, legSegmentLength }) => {
  const circleInfo = { centerX, centerY, radius: circleRadius };
  const circleRight = getPointOnCircle({ ...circleInfo, degrees: 0 });
  const circleBottomRight = getPointOnCircle({ ...circleInfo, degrees: 65 });
  const circleBottomLeft = getPointOnCircle({ ...circleInfo, degrees: 115 });
  const circleLeft = getPointOnCircle({ ...circleInfo, degrees: 180 });
  const circleTopLeft = getPointOnCircle({ ...circleInfo, degrees: 225 });
  const circleTopRight = getPointOnCircle({ ...circleInfo, degrees: 315 });

  const topLeftLegStart = {
    x: circleTopLeft.x - legMargin,
    y: circleTopLeft.y - legMargin,
  };
  const leftLegStart = {
    x: circleLeft.x - legMargin,
    y: circleLeft.y,
  };
  const bottomLeftLegStart = {
    x: circleBottomLeft.x - legMargin,
    y: circleBottomLeft.y + legMargin,
  };
  const topRightLegStart = {
    x: circleTopRight.x + legMargin,
    y: circleTopRight.y - legMargin,
  };
  const rightLegStart = {
    x: circleRight.x + legMargin,
    y: circleRight.y,
  };
  const bottomRightLegStart = {
    x: circleBottomRight.x + legMargin,
    y: circleBottomRight.y + legMargin,
  };

  return (
    <g>
      {getLeg({
        d: [
          `M ${leftLegStart.x} ${leftLegStart.y}`,
          `L ${leftLegStart.x - legSegmentLength / 2} ${leftLegStart.y + legSegmentLength / 2}`,
          `V ${leftLegStart.y + legSegmentLength}`,
        ],
      })}
      {getLeg({
        d: [
          `M ${topLeftLegStart.x} ${topLeftLegStart.y}`,
          `L ${topLeftLegStart.x - legSegmentLength / 2} ${topLeftLegStart.y - legSegmentLength / 2}`,
          `V ${topLeftLegStart.y - legSegmentLength}`,
        ],
      })}
      {getLeg({
        d: [
          `M ${bottomLeftLegStart.x} ${bottomLeftLegStart.y}`,
          `L ${bottomLeftLegStart.x - legSegmentLength / 2} ${bottomLeftLegStart.y + legSegmentLength / 2}`,
          `V ${bottomLeftLegStart.y + legSegmentLength}`,
        ],
      })}

      {getLeg({
        d: [
          `M ${rightLegStart.x} ${rightLegStart.y}`,
          `L ${rightLegStart.x + legSegmentLength / 2} ${rightLegStart.y + legSegmentLength / 2}`,
          `V ${rightLegStart.y + legSegmentLength}`,
        ],
      })}
      {getLeg({
        d: [
          `M ${topRightLegStart.x} ${topRightLegStart.y}`,
          `L ${topRightLegStart.x + legSegmentLength / 2} ${topLeftLegStart.y - legSegmentLength / 2}`,
          `V ${topRightLegStart.y - legSegmentLength}`,
        ],
      })}
      {getLeg({
        d: [
          `M ${bottomRightLegStart.x} ${bottomRightLegStart.y}`,
          `L ${bottomRightLegStart.x + legSegmentLength / 2} ${bottomRightLegStart.y + legSegmentLength / 2}`,
          `V ${bottomRightLegStart.y + legSegmentLength}`,
        ],
      })}
    </g>
  );
};

export default function Logo() {
  /*
   * This is a terrible rendering of the play button to hopefully illustrate its vertices.
   *
   * A
   * | \
   * |  C
   * | /
   * B
   */
  const playVertices = {
    c: {
      x: centerX + (Math.sqrt(3) / 3) * playEdgeLength,
      y: centerY,
    },
    b: {
      x: centerX - (Math.sqrt(3) / 6) * playEdgeLength,
      y: centerY + playEdgeLength / 2,
    },
    a: {
      x: centerX - (Math.sqrt(3) / 6) * playEdgeLength,
      y: centerY - playEdgeLength / 2,
    },
  };
  const legs = getLegs({
    centerX,
    centerY,
    circleRadius: playCircleRadius + playCircleStrokeWidth,
    legSegmentLength,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink= "http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeWidth: playStrokeWidth,
          stroke: playPurple,
          fill: playPurple,
        }}
        d={[
          `M ${playVertices.a.x} ${playVertices.a.y}`,
          `L ${playVertices.c.x} ${playVertices.c.y}`,
          `L ${playVertices.b.x} ${playVertices.b.y}`,
          'z'
        ].join(' ')}
      />
      <circle
        style={{
          strokeWidth: playCircleStrokeWidth,
          stroke: playPurple,
          fill: 'transparent',
        }}
        cx={centerX}
        cy={centerY}
        r={playCircleRadius}
      />

      {legs}
    </svg>
  );
}
