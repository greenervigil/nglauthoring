// React Router 7 needs TextEncoder, which CRA's jsdom (Jest 27) doesn't provide.
import { TextDecoder, TextEncoder } from 'util'

Object.assign(global, { TextDecoder, TextEncoder })
