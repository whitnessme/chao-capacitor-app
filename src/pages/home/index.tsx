import { CapacitorSQLite, SQLiteConnection } from "@capacitor-community/sqlite"
import { useEffect, useState } from "react";
import Link from "next/link";
import * as chaoData from '../../seed-data.json';

const mySQLite = new SQLiteConnection(CapacitorSQLite)

const Home: React.FC = () => {

    const [db, setDb] = useState<any>(null);
    const [chaos, setChaos] = useState<any>(null);

    
    const loadJSON = async () => {
        let data = JSON.stringify(chaoData)
        const isValid = await CapacitorSQLite.isJsonValid({ jsonstring: data });
        console.log("ISVALID-----------", isValid.result)
        return await mySQLite.importFromJson(data)
    }

    const initializeDB = async () => {
    const ret = await mySQLite.checkConnectionsConsistency();
    const isConn = (await mySQLite.isConnection("chaodb", false)).result;
    
    let database: any;
    console.log("ret ---- ", ret, "isConn ----- ", isConn)
    if (ret.result && isConn) {
        database = await mySQLite.retrieveConnection("chaodb", false)
    } else if (ret && !ret.result && !isConn) {
        database = await mySQLite.createConnection(
            "chaodb",
            false,
            "no-encryption",
            1,
            false
            );
        }
        setDb(database);
        return database;
    }

    useEffect(() => {
        initializeDB().then((db:any) => {
            console.log("useEffect initialized " + JSON.stringify(db, null, 2))
            return loadJSON();
        }).then((res: any) => {
            console.log("after loading...", JSON.stringify(res, null, 2));
            db.open()
            return db.query("SELECT * FROM chaos")
        }).then ((data:any) => {
            console.log("DATA", data)
            setChaos(data.values)
        }).catch((res:any) => {

        })
    }, [])


    return (
        <div className="flex-1">
            <h1>Home</h1>
            <Link href="/">Back</Link>
        </div>
    )
}

export default Home;