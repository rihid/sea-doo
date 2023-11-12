import Image from "next/image";
import seadooLogo from '@/public/seadoo-logo.svg'
import seadooLogoWhite from '@/public/seadoo-white.svg'
import IconMenu from '@/public/icon/IconMenu.svg'
import iconMenuWhite from '@/public/icon/IconMenuWhite.svg'
import iconClose from '@/public/icon/iconClose.svg'
import iconArrowRight from '@/public/icon/iconArrowRight.svg'
import iconIG from '@/public/icon/iconInstagram.svg'
import iconFB from '@/public/icon/iconFacebook.svg'
import iconX from '@/public/icon/iconTwitter.svg'
import iconYoutube from '@/public/icon/iconYoutube.svg'

type IconProps =  {
    name: string;
    size?: number; 
}

function Icon({name, size}: IconProps) {
    switch(name) {
        case 'seadoo-logo':
            return <Image src={seadooLogo} width={size} height={size} alt={name} />
        case 'seadoo-logo-white':
            return <Image src={seadooLogoWhite} width={size} height={size} alt={name} />
        case 'icon-menu':
            return <Image src={IconMenu} width={size} height={size} alt={name} />
        case 'icon-menu-white':
            return <Image src={iconMenuWhite} width={size} height={size} alt={name} />
        case 'icon-close':
            return <Image src={iconClose} width={size} height={size} alt={name} />
        case 'icon-arrow-right':
            return <Image src={iconArrowRight} width={size} height={size} alt={name} />
        case 'icon-ig':
            return <Image src={iconIG} width={size} height={size} alt={name} />
        case 'icon-fb':
            return <Image src={iconFB} width={size} height={size} alt={name} />
        case 'icon-x':
            return <Image src={iconX} width={size} height={size} alt={name} />
        case 'icon-youtube':
            return <Image src={iconYoutube} width={size} height={size} alt={name} />
        default: 
            return <span>No icon found</span>
    }
}

export default Icon