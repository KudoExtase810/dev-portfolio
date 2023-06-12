interface props {
    skill: { name: string; type: string | null; typeColor: string };
}
function SingleSkill({ skill }: props) {
    return (
        <li>
            <span>{skill.name}</span>
            {skill.type && (
                <div style={{ backgroundColor: skill.typeColor }}>
                    {skill.type}
                </div>
            )}
        </li>
    );
}
export default SingleSkill;
