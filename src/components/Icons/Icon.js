import {
  IconAppStore,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLocation,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTelegram,
  IconTwitter,
  IconZap
} from '@components/Icons'
import PropTypes from 'prop-types'

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />
    case 'Codepen':
      return <IconCodepen />
    case 'External':
      return <IconExternal />
    case 'Folder':
      return <IconFolder />
    case 'Fork':
      return <IconFork />
    case 'GitHub':
      return <IconGitHub />
    case 'Instagram':
      return <IconInstagram />
    case 'Linkedin':
      return <IconLinkedin />
    case 'Loader':
      return <IconLoader />
    case 'Location':
      return <IconLocation />
    case 'PlayStore':
      return <IconPlayStore />
    case 'Star':
      return <IconStar />
    case 'Twitter':
      return <IconTwitter />
    case 'Zap':
      return <IconZap />
    case 'Telegram':
      return <IconTelegram />
    default:
      return <IconExternal />
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon
