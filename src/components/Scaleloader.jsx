import ScaleLoader from 'react-spinners/ScaleLoader'

export default function Scaleloader() {

    return (
        <ScaleLoader
            color="#f25c05"
            cssOverride={{}}
            height={100}
            margin={5}
            speedMultiplier={2}
            width={8}
            radius={10}
        />
    );
}