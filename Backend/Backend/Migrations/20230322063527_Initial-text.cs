using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Initialtext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "MyData");

            migrationBuilder.DropColumn(
                name: "Balance",
                table: "MyData");

            migrationBuilder.AddColumn<string>(
                name: "Text",
                table: "MyData",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Text",
                table: "MyData");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "MyData",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Balance",
                table: "MyData",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
