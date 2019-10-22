/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'

const Bio = () => (
  <div>
    <div css={tw`flex md:flex-col items-center md:items-start`}>
      <Link to="/" css={tw`mr-4`}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>simonswiss logo</title>
          <g fill="none" fillRule="evenodd">
            <circle fill="#F85B5B" cx="40" cy="40" r="40" />
            <path
              d="M16.142 30.87c-.27-.26-.59-.476-.955-.652-.365-.176-.75-.264-1.158-.264-.312 0-.6.06-.864.183-.264.122-.396.332-.396.63 0 .284.145.488.436.61.292.12.762.257 1.412.406.38.08.762.196 1.148.345.386.15.735.346 1.047.59.31.243.562.54.75.893.19.354.286.773.286 1.26 0 .638-.13 1.176-.387 1.616-.257.44-.593.796-1.006 1.067-.413.27-.877.467-1.392.59-.514.12-1.03.182-1.544.182-.825 0-1.634-.132-2.427-.396-.792-.265-1.452-.655-1.98-1.17l1.87-1.97c.297.325.662.596 1.096.813.432.216.893.325 1.38.325.27 0 .54-.065.803-.193.264-.13.396-.356.396-.68 0-.313-.163-.543-.49-.692-.324-.15-.832-.305-1.522-.467-.353-.08-.705-.19-1.057-.325-.35-.135-.666-.318-.944-.548-.277-.23-.504-.514-.68-.853-.176-.34-.264-.746-.264-1.22 0-.61.128-1.128.386-1.554.257-.427.59-.776.995-1.047.407-.272.857-.47 1.35-.6.496-.13.987-.193 1.474-.193.76 0 1.5.118 2.225.355.725.237 1.338.593 1.84 1.067l-1.83 1.89zm7.064-6.22c0 .26-.05.5-.152.723-.102.223-.237.416-.407.58-.17.16-.372.29-.61.385-.236.095-.484.142-.74.142-.543 0-.996-.18-1.362-.538-.366-.36-.55-.79-.55-1.29 0-.244.05-.478.143-.702.095-.223.23-.416.407-.58.176-.16.38-.293.61-.395.23-.1.48-.152.75-.152.258 0 .506.047.743.142.237.095.44.224.61.386.17.164.304.357.406.58.1.224.152.464.152.72zM19.63 38V27.882h3.332V38H19.63zm18.706 0v-5.526c0-.285-.02-.56-.06-.823-.042-.263-.116-.49-.225-.68-.107-.19-.253-.342-.436-.457-.182-.115-.423-.173-.72-.173-.285 0-.533.06-.742.183-.21.122-.386.285-.53.488-.14.204-.246.438-.314.702-.067.264-.1.538-.1.823V38h-3.333v-5.77c0-.583-.115-1.043-.346-1.382-.23-.338-.597-.508-1.098-.508-.528 0-.938.21-1.23.63-.29.42-.436.935-.436 1.544V38h-3.352V27.882h3.23v1.402h.04c.123-.217.275-.427.458-.63s.403-.383.66-.538c.258-.156.546-.282.864-.376.318-.095.667-.143 1.046-.143.732 0 1.35.15 1.86.447.507.298.903.725 1.188 1.28.338-.528.772-.948 1.3-1.26.528-.31 1.172-.467 1.93-.467.69 0 1.27.126 1.737.376.468.25.844.576 1.128.976.284.398.49.845.62 1.34.128.494.193.978.193 1.452V38h-3.332zm16.39-5.1c0 .827-.15 1.575-.448 2.245-.298.67-.704 1.24-1.22 1.707-.514.467-1.11.83-1.787 1.087-.676.256-1.4.385-2.173.385-.758 0-1.48-.13-2.164-.386-.684-.258-1.28-.62-1.788-1.088-.508-.467-.91-1.036-1.208-1.707-.298-.67-.447-1.418-.447-2.245 0-.826.15-1.57.447-2.235.297-.663.7-1.225 1.208-1.686.508-.46 1.104-.814 1.788-1.057.684-.244 1.406-.366 2.164-.366.772 0 1.497.122 2.174.366.678.243 1.274.596 1.79 1.056.514.46.92 1.022 1.218 1.685.298.664.447 1.41.447 2.235zm-3.21 0c0-.325-.055-.643-.164-.955-.108-.31-.264-.585-.467-.822s-.454-.43-.752-.58c-.298-.15-.643-.223-1.036-.223s-.738.074-1.036.223c-.297.15-.544.343-.74.58-.197.237-.346.51-.448.822-.1.312-.152.63-.152.955 0 .325.05.644.152.955.102.312.254.593.458.843.203.25.453.45.75.6.3.15.645.223 1.037.223.393 0 .74-.073 1.037-.222.298-.15.548-.35.75-.6.205-.25.357-.53.46-.843.1-.31.15-.63.15-.955zM63.29 38v-5.526c0-.285-.023-.556-.07-.813-.048-.256-.126-.483-.234-.68-.11-.196-.26-.352-.458-.467-.196-.115-.443-.173-.74-.173-.3 0-.56.058-.783.173-.224.115-.41.274-.56.477-.148.204-.26.437-.334.7-.075.266-.112.54-.112.824V38H56.65V27.882h3.23v1.402h.042c.12-.217.28-.43.477-.64.196-.21.427-.39.69-.54.265-.148.553-.27.864-.364.313-.095.645-.143.997-.143.677 0 1.253.122 1.727.366.474.244.857.56 1.148.945.29.386.5.83.63 1.33.128.502.193 1.003.193 1.504V38h-3.353zm-47.15 10.01c-.27-.256-.59-.473-.955-.65-.365-.175-.75-.263-1.158-.263-.312 0-.6.06-.864.183-.264.122-.396.332-.396.63 0 .284.145.487.436.61.292.12.762.257 1.412.406.38.08.762.196 1.148.345.386.15.735.347 1.047.59.31.244.562.542.75.894.19.352.286.772.286 1.26 0 .637-.13 1.175-.387 1.615-.257.44-.593.795-1.006 1.066-.413.27-.877.467-1.392.59-.514.12-1.03.182-1.544.182-.825 0-1.634-.132-2.427-.396-.792-.264-1.452-.654-1.98-1.17l1.87-1.97c.297.326.662.597 1.096.813.432.217.893.325 1.38.325.27 0 .54-.064.803-.193.264-.128.396-.355.396-.68 0-.312-.163-.542-.49-.69-.324-.15-.832-.306-1.522-.468-.353-.083-.705-.19-1.057-.326-.35-.136-.666-.32-.944-.55-.277-.23-.504-.514-.68-.852-.176-.34-.264-.745-.264-1.22 0-.61.128-1.127.386-1.554.257-.426.59-.775.995-1.046.407-.27.857-.47 1.35-.6.496-.128.987-.192 1.474-.192.76 0 1.5.118 2.225.355.725.237 1.338.593 1.84 1.067l-1.83 1.89zm16.33 7.133h-3.354l-1.99-6.3h-.04l-1.952 6.3h-3.352L18.29 45.025h3.595l1.748 6.4h.06l1.81-6.4h3.35l1.87 6.4h.04l1.77-6.4h3.453L32.47 55.143zm8.24-13.35c0 .26-.05.5-.152.723-.1.223-.237.416-.406.58-.17.16-.372.29-.61.385-.236.095-.484.143-.74.143-.543 0-.997-.18-1.362-.54-.366-.357-.55-.788-.55-1.29 0-.243.05-.476.143-.7.095-.223.23-.416.407-.58.176-.16.38-.293.61-.395.23-.1.48-.152.75-.152.258 0 .506.047.743.142.237.095.44.223.61.386.168.163.304.356.405.58.102.223.153.463.153.72zm-3.575 13.35V45.025h3.332v10.118h-3.333zm11.737-7.132c-.27-.256-.59-.473-.955-.65-.367-.175-.753-.263-1.16-.263-.31 0-.6.06-.863.183-.264.122-.396.332-.396.63 0 .284.147.487.438.61.29.12.762.257 1.412.406.38.08.762.196 1.148.345.386.15.735.347 1.046.59.312.244.562.542.752.894.19.352.284.772.284 1.26 0 .637-.128 1.175-.386 1.615-.257.44-.592.795-1.005 1.066-.415.27-.878.467-1.393.59-.515.12-1.03.182-1.544.182-.827 0-1.636-.132-2.428-.396-.793-.264-1.453-.654-1.98-1.17l1.868-1.97c.298.326.664.597 1.097.813.434.217.894.325 1.382.325.27 0 .538-.064.802-.193.264-.128.396-.355.396-.68 0-.312-.162-.542-.487-.69-.325-.15-.833-.306-1.524-.468-.353-.083-.705-.19-1.057-.326-.353-.136-.668-.32-.945-.55-.278-.23-.505-.514-.68-.852-.177-.34-.265-.745-.265-1.22 0-.61.13-1.127.386-1.554.256-.426.588-.775.995-1.046.406-.27.856-.47 1.35-.6.495-.128.986-.192 1.474-.192.757 0 1.5.118 2.223.355.725.237 1.338.593 1.84 1.067l-1.83 1.89zm9.4 0c-.27-.256-.59-.473-.955-.65-.367-.175-.753-.263-1.16-.263-.31 0-.6.06-.863.183-.264.122-.396.332-.396.63 0 .284.147.487.438.61.29.12.762.257 1.412.406.38.08.762.196 1.148.345.386.15.735.347 1.046.59.312.244.562.542.752.894.19.352.285.772.285 1.26 0 .637-.128 1.175-.386 1.615-.257.44-.592.795-1.005 1.066-.414.27-.878.467-1.393.59-.515.12-1.03.182-1.544.182-.826 0-1.636-.132-2.428-.396s-1.453-.654-1.98-1.17l1.868-1.97c.298.326.664.597 1.097.813.434.217.894.325 1.382.325.27 0 .538-.064.802-.193.265-.128.397-.355.397-.68 0-.312-.162-.542-.487-.69-.325-.15-.833-.306-1.524-.468-.353-.083-.705-.19-1.057-.326s-.667-.32-.945-.55c-.278-.23-.505-.514-.68-.852-.177-.34-.265-.745-.265-1.22 0-.61.13-1.127.386-1.554.257-.426.588-.775.995-1.046.406-.27.857-.47 1.35-.6.495-.128.986-.192 1.474-.192.757 0 1.5.118 2.224.355.724.237 1.337.593 1.838 1.067l-1.828 1.89z"
              fill="#FFF"
            />
          </g>
        </svg>
      </Link>

      <h2 css={tw`my-3 leading-tight font-bold`}>Simon Vrachliotis</h2>
    </div>

    <p css={tw`text-gray-700 mt-4 md:mt-0 mb-8`}>
      Swiss front-end designer and developer based on Sydney's Northern Beaches.
      Proud father of two. Surf, basketball, ukulele. Love learning, love
      teaching - doing both with{' '}
      <a href="https://thinkmill.com.au">Thinkmill</a>.
    </p>
  </div>
)

export default Bio