import Head from "next/head"
import styles from "./layout.module.css"

export default function Layout({children,pageTitle}){
    return(
        <div className={styles.container}>
            <head>
                <title>My blog | {pageTitle}</title>
            </head>
            <h1>My Blog</h1>
            {children}
        </div>
    )
}