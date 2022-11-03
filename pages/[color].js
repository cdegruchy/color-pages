import colors from '../data/colors.json'

export async function getStaticPaths() {
    // eg. [  { params: { color: 'Marsala' } }, ... ]
    const paths = colors.map(color => ({
        params: { color: color.name }
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // eg. [ { "name": "Illuminating", "hex": "#F5DF4D" } ]
    const color = colors.find(color => color.name === params.color)

    return { props: { color } }
}

export default function Color({ color }) {
    return <div className='color-page' style={{ backgroundColor: color.hex }}>
        <h1>{color.name}</h1>
    </div>
}