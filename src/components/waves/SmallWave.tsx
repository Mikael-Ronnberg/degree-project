interface SmallWaveProps {
  color: string;
}

export const SmallWave = ({ color }: SmallWaveProps) => {
  return (
    <>
      <svg
        width="1282"
        height="42"
        viewBox="0 0 1282 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1206.49 1C1269.51 1 1281 15.8197 1281 15.8197V40.5H1V15.8197C1 15.8197 28.8577 1 97.454 1C166.05 1 162.915 21.9946 228.378 21.9946C293.84 21.9946 290.708 0.999906 358.607 1C424.37 1.00009 422.326 21.9946 493.71 21.9946C565.093 21.9946 565.441 1.00006 650.751 1C736.061 0.999936 715.517 21.9946 802.917 21.9946C890.316 21.9946 876.388 1.00015 958.216 1C1040.04 0.999852 1028.9 21.9947 1092.62 21.9946C1156.34 21.9945 1143.46 1 1206.49 1Z"
          fill={color}
        />
        <path
          d="M1 15.8197C1 15.8197 28.8577 1 97.454 1C166.05 1 162.915 21.9946 228.378 21.9946C293.84 21.9946 290.708 0.999906 358.607 1C424.37 1.00009 422.326 21.9946 493.71 21.9946C565.093 21.9946 565.441 1.00006 650.751 1C736.061 0.999936 715.517 21.9946 802.917 21.9946C890.316 21.9946 876.388 1.00015 958.216 1C1040.04 0.999852 1028.9 21.9947 1092.62 21.9946C1156.34 21.9945 1143.46 1 1206.49 1C1269.51 1 1281 15.8197 1281 15.8197"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="1"
          y1="15.8197"
          x2="1"
          y2="40.5"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="1281"
          y1="15.8197"
          x2="1281"
          y2="40.5"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};
