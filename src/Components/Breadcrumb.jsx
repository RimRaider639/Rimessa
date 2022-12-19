import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Text,
} from '@chakra-ui/react'

export default function CustomBreadcrumb({links}){
    return <Breadcrumb>
        {links.map(link=>
        <BreadcrumbItem>
            {link.path?<BreadcrumbLink href={link.path.toLowerCase()}>{link.text}</BreadcrumbLink>
            :<Text>{link.text}</Text>}
        </BreadcrumbItem>)}
    </Breadcrumb>
}